from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File

import shutil

from app.utils.pdf_processor import (
    convert_pdf_to_images
)

from app.services.ocr_service import (
    extract_text_from_image
)

from app.services.fraud_service import (
    analyze_document
)

from app.services.scoring_service import (
    generate_risk_score
)

router = APIRouter()

@router.post("/upload")
async def upload_file(
    file: UploadFile = File(...)
):

    file_path = f"uploads/{file.filename}"

    with open(file_path, "wb") as buffer:

        shutil.copyfileobj(
            file.file,
            buffer
        )

    extension = (
        file.filename
        .split(".")[-1]
        .lower()
    )

    image_paths = []

    # PDF SUPPORT
    if extension == "pdf":

        image_paths = convert_pdf_to_images(
            file_path
        )

    else:
        image_paths.append(file_path)

    all_ocr = []

    all_suspicious_regions = []

    for image in image_paths:

        # OCR
        ocr_result = extract_text_from_image(
            image
        )

        # Fraud Detection
        suspicious_regions = analyze_document(
            image
        )

        all_ocr.extend(ocr_result)

        all_suspicious_regions.extend(
            suspicious_regions
        )

    # Risk Scoring
    score_result = generate_risk_score(
        all_suspicious_regions,
        all_ocr
    )

    return {
        "fraud_score":
            score_result["fraud_score"],

        "status":
            score_result["status"],

        "explanation":
            score_result["explanation"],

        "ocr_data":
            all_ocr,

        "suspicious_regions":
            all_suspicious_regions
    }