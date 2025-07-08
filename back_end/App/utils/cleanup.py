import os
import time

UPLOAD_FOLDER = "app/uploads"
EXPIRY_SECONDS = 60 * 60 * 24  # 1 hari

def cleanup_uploads():
    now = time.time()
    for filename in os.listdir(UPLOAD_FOLDER):
        path = os.path.join(UPLOAD_FOLDER, filename)
        if os.path.isfile(path):
            age = now - os.path.getmtime(path)
            if age > EXPIRY_SECONDS:
                try:
                    os.remove(path)
                    print(f"🧹 Deleted: {filename}")
                except Exception as e:
                    print(f"⚠️ Failed to delete {filename}: {e}")
