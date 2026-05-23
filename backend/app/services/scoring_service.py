def generate_risk_score(
    suspicious_regions,
    ocr_data
):

    fraud_score = min(
        len(suspicious_regions) * 5,
        95
    )

    explanation = []

    if fraud_score > 70:

        explanation.append(
            "High anomaly density detected"
        )

    if len(ocr_data) < 3:

        explanation.append(
            "Low OCR confidence document"
        )

    if fraud_score > 70:
        status = "HIGH RISK"
    else:
        status = "LOW RISK"

    return {
        "fraud_score": fraud_score,
        "status": status,
        "explanation": explanation
    }