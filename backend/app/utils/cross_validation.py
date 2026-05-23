def validate_documents(doc1, doc2):

    anomalies = []

    if doc1.get("name") != doc2.get("name"):
        anomalies.append("Name mismatch detected")

    if doc1.get("address") != doc2.get("address"):
        anomalies.append("Address mismatch detected")

    return anomalies