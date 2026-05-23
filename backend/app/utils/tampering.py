import cv2

def detect_suspicious_regions(image_path):

    image = cv2.imread(image_path)

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    edges = cv2.Canny(gray, 100, 200)

    contours, _ = cv2.findContours(
        edges,
        cv2.RETR_EXTERNAL,
        cv2.CHAIN_APPROX_SIMPLE
    )

    suspicious_boxes = []

    for contour in contours:

        x, y, w, h = cv2.boundingRect(contour)

        area = w * h

        if area > 500:

            suspicious_boxes.append({
                "x": int(x),
                "y": int(y),
                "w": int(w),
                "h": int(h)
            })

    return suspicious_boxes