const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();

recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
    const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    p.innerText = text;
    texts.appendChild(p);

    if(e.results[0].isFinal){
        if(text.includes('hello')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Hi';
            texts.appendChild(p);
        }   
        if(text.includes('What is your name')||text.includes("What's your name")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'My name is Dileep!';
            texts.appendChild(p);
        }  


        // to give the instructions via speech to open youTube in browser 
        if(text.includes('Open YouTube')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'opening YouTube for You!';
            texts.appendChild(p);
            window.open('https://www.youtube.com/');
        }  


        // to give the instructions via speech to open coding ninja classroom in browser 
        if(text.includes('Open Coding Ninja Classroom')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'opening coding ninja classroom for you!';
            texts.appendChild(p);
            window.open('https://classroom.codingninjas.com/app/cohorts/21142/milestones/107308');
        }

        
        // to give the instructions via speech to open coding ninja classroom in browser    
        if(text.includes('Open ChatGPT.')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'opening chatgpt for you!';
            texts.appendChild(p);
            window.open('https://chat.openai.com/');
        }
          
    }
});

recognition.addEventListener('end',()=>{
    recognition.start();
})

recognition.start();