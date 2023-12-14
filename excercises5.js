
    function generateElements(textColour){
        return function addElement(tagname, textcontent){
            var newdiv = document.createElement(tagname);
            newdiv.textContent=textcontent||"";
            newdiv.style.width = "200px";
            newdiv.style.height = "100px";
            newdiv.style.color=textColour||"black";
            return document.getElementById('container').appendChild(newdiv);
        }
    }
    const genele = generateElements('red');
    const genele2 = generateElements('blue')
    genele('div','Hello World');
    genele('span','Hello Span');
    genele2('h1','Hello All')