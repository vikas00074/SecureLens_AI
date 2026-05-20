from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
import easyocr
import cv2
import numpy as np

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)

reader = easyocr.Reader(['en'])

@app.get("/")
def home():
    return {"message": "SecureLens AI Running"}

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):

    file_path = f"{UPLOAD_DIR}/{file.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # OCR Extraction
    result = reader.readtext(file_path)

    # OpenCV Processing
    image = cv2.imread(file_path)

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    edges = cv2.Canny(gray, 100, 200)

    # Dummy Fraud Score
    suspicious_score = len(result) * 5

    suspicious_score = int(suspicious_score)

    if suspicious_score > 100:
        suspicious_score = 95

    status = "LOW RISK"

    if suspicious_score > 70:
        status = "HIGH RISK"
    elif suspicious_score > 40:
        status = "MEDIUM RISK"

    # Convert OCR output into JSON-safe format
    cleaned_result = []

    for item in result:

        bbox = [[int(point[0]), int(point[1])] for point in item[0]]

        text = str(item[1])

        confidence = float(item[2])

        cleaned_result.append({
            "bbox": bbox,
            "text": text,
            "confidence": confidence
        })

    return {
        "fraud_score": suspicious_score,
        "status": status,
        "ocr_data": cleaned_result
    }