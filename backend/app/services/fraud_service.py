from app.utils.tampering import detect_suspicious_regions

def analyze_document(image_path):

    suspicious_regions = detect_suspicious_regions(image_path)

    return suspicious_regions