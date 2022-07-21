/**
 * 開啟檔案
*/
function openFile(path, type) {
  // 沒有 domain 時，按照一般開啟連結的方式
  const domain = '';

  // 啟動本地端 Server 時，請將domain 輸入
  // const domain = 'http://127.0.0.1:5500/';
  
  const docType = `ms-${type}`;
  const fileUrl = `${docType}:ofv|u|${domain}${path}`;
  if (domain === '') {
    window.open(`../${path}`, '_blank');
  } else {
    document.location.href = fileUrl;
  }

}