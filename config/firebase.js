    //o que nao for feito a mao é copiado direto da pagina do firebase
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
        //import na mao
        import {getAuth} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"

        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyDe2VmMNEXxPeSFYFOj2NVKh0m48jY50nQ",
          authDomain: "cartaovacinal.firebaseapp.com",
          projectId: "cartaovacinal",
          storageBucket: "cartaovacinal.appspot.com",
          messagingSenderId: "258092438513",
          appId: "1:258092438513:web:e257d0086187733479aa50"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        //criaçao do auth na mao
        const auth = getAuth(app)

        export {app, auth}
  