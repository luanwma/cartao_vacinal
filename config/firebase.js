    //o que nao for feito a mao é copiado direto da pagina do firebase
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
        import { initializeFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
        //import na mao
        import { getAuth } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"

        import { getStorage } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js"
     
    
      

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
        

        const auth = getAuth(app)
        const db = initializeFirestore(app, {experimentalForceLongPolling: true})
        const storage = getStorage(app)

       

        export {app, auth, db, storage}
  