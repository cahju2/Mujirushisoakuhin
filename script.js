function copyText(elementId) {
    const targetText = document.getElementById(elementId).innerText;
    
    navigator.clipboard.writeText(targetText).then(() => {
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