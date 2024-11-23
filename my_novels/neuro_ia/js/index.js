let currentFontSize = 18;
let currentTheme = 'default';

// 从localStorage加载字体大小和主题
window.onload = function() {
    const savedFontSize = localStorage.getItem('fontSize');
    const savedTheme = localStorage.getItem('theme');
    const isTheFirst = document.body.getAttribute('data-the-first') === 'true';
    const isTheEnd = document.body.getAttribute('data-the-end') === 'true';

    if (isTheFirst) {
        document.getElementById('prev-chapter').style.display = 'none';
    }
    if (isTheEnd) {
        document.getElementById('next-chapter').style.display = 'none';
    }

    if (savedFontSize) {
        currentFontSize = parseInt(savedFontSize);
        document.getElementById('novel-text').style.fontSize = currentFontSize + 'px';
        document.querySelectorAll('#top-controls button, #controls button').forEach(button => {
            button.style.fontSize = currentFontSize + 'px';
        });
    }
    if (savedTheme) {
        currentTheme = savedTheme;
        switchTheme(currentTheme); // 使用switchTheme函数来应用主题
    } else {
        document.body.classList.add('default_theme'); // 默认主题
        document.getElementById('novel-container').classList.add('default_reader_theme'); // 默认阅读器主题
    }
};

function increaseFontSize() {
    currentFontSize += 2;
    document.getElementById('novel-text').style.fontSize = currentFontSize + 'px';
    document.querySelectorAll('#top-controls button, #controls button').forEach(button => {
        button.style.fontSize = currentFontSize + 'px';
    });
    localStorage.setItem('fontSize', currentFontSize.toString());
}

function decreaseFontSize() {
    if (currentFontSize > 10) {
        currentFontSize -= 2;
        document.getElementById('novel-text').style.fontSize = currentFontSize + 'px';
        document.querySelectorAll('#top-controls button, #controls button').forEach(button => {
            button.style.fontSize = currentFontSize + 'px';
        });
        localStorage.setItem('fontSize', currentFontSize.toString());
    }
}

function switchTheme(theme) {
    currentTheme = theme;
    // 移除所有主题类
    document.body.classList.remove('default_theme', 'black_theme');
    document.getElementById('novel-container').classList.remove('default_reader_theme', 'black_reader_theme');
    // 添加选择的主题类
    document.body.classList.add(theme + '_theme');
    document.getElementById('novel-container').classList.add(theme + '_reader_theme');
    localStorage.setItem('theme', currentTheme);
}

function goToPreviousChapter(href) {
    window.location.href = href;
}

function goToNextChapter(href) {
    window.location.href = href; // 替换为实际的下一章文件路径
}