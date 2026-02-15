/**
 * Utility function untuk mendownload APK
 * Dapat digunakan oleh semua komponen
 */

export const downloadAPK = (filename, downloadName) => {
  return new Promise((resolve) => {
    // Buat element link untuk download
    const link = document.createElement("a");
    link.href = `/apk/${filename}`;
    link.download = downloadName;
    link.target = "_blank";

    // Trigger download
    setTimeout(() => {
      link.click();
      resolve();
    }, 100);
  });
};

export const handleAPKDownload = (type = "universal") => {
  const apkFiles = {
    universal: {
      filename: "smakzie-muslim.apk",
      downloadName: "Ziekir+-smakzie-universal.apk",
    },
    arm64: {
      filename: "app-arm64-v8a-release.apk",
      downloadName: "Ziekir+-smakzie-arm64.apk",
    },
    arm: {
      filename: "app-armeabi-v7a-release.apk",
      downloadName: "Ziekir+-smakzie-armv7.apk",
    },
    x86: {
      filename: "app-x86_64-release.apk",
      downloadName: "Ziekir+-smakzie-x86.apk",
    },
  };

  const selected = apkFiles[type] || apkFiles.universal;

  // Simpan interaksi ke localStorage (untuk floating button)
  const interacted = localStorage.getItem("floatingButtonInteracted");
  if (!interacted) {
    localStorage.setItem("floatingButtonInteracted", "true");
  }

  return downloadAPK(selected.filename, selected.downloadName);
};

// Helper untuk menampilkan notification
export const showDownloadNotification = () => {
  // Anda bisa menambahkan notifikasi global di sini
  console.log("Download started");
};
