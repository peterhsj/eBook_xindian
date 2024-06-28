/**
 * 開啟檔案
*/
function openFile(path, type) {
  // 沒有 網址 時，按照一般開啟連結的方式
  // const BASE_URL = '';

  // 啟動本地端 Server 時，請將BASE_URL 輸入
  // const BASE_URL = 'http://220.1.117.110/ebook/';
  const BASE_URL = 'http://127.0.0.1:5500/';
  
  const docType = `ms-${type}`;
  const fileUrl = `${docType}:ofv|u|${BASE_URL}${path}`;
  if (BASE_URL === '') {
    window.open(`../${path}`, '_blank');
  } else {
    document.location.href = fileUrl;
  }

}