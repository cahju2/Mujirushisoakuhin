function copyIP() {
    const ipText = document.getElementById('ipText').innerText;
    
    navigator.clipboard.writeText(ipText).then(() => {
        const toast = document.getElementById('toast');
        
        // すでに表示されている場合の連続クリック対策
        toast.classList.remove('show');
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 50);

        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }).catch(err => {
        console.error('コピーに失敗しました: ', err);
    });
}