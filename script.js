function copyIP() {
    const ipText = document.getElementById('ipText').innerText;
    
    navigator.clipboard.writeText(ipText).then(() => {
        const toast = document.getElementById('toast');
        
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