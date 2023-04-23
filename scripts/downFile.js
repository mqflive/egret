$(function () {
    $('.ant-btn').click(function (item) {

        let name = item.currentTarget.name;
        if (!name) return;

        let url = '';
        let iswin = navigator.platform == "Win32" || navigator.platform == "Windows";
        switch (name) {
            case 'Egret Engine':
                url = iswin ? 'ifgcJ05zbiuf' : 'i1GIa06uo3wb';
                break;
            case 'Egret Pro':
                url = iswin ? 'iTEOg06or80b' : 'iq6lm06pchqh';
                break;
            case 'Egret Wing':
                url = iswin ? 'iLUNG06or9fc' : 'itFU606pcjeh';
                break;
            case 'Egret Native':

                break;
            case 'Egret UI Editor':
                url = iswin ? 'iofD706orbaj' : 'i7tk506pcove';
                break;
            case 'DragonBones':
                url = iswin ? 'ipYKs06or5ud' : 'iXW2106pcg6b';
                break;
            case 'Lakeshore':
                url = iswin ? 'iWJa506orc4j' : 'irtQK06pcnjg';
                break;
            case 'Egret Feathe':
                url = iswin ? 'iEHmg06or6pe' : 'it2Nd06pcgpa';
                break;
            case 'Texture Merger':
                url = iswin ? 'iLNi406orcni' : 'i98w406pclgb';
                break;
            case 'Res Depot':
                url = iswin ? 'iDVy806orcej' : 'iltK606pcmja';
                break;
            case 'Egret Inspector':
                url = iswin ? 'iVbcN06or7za' : 'iIeiP06pciah';
                break;
            default:
                break;
        }

        if (!url) return;

        //浏览器打开新的页面
        window.open('https://startgame.lanzouo.com/' + url);
    })
});