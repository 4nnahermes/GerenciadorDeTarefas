import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(), provideFirebaseApp(() => initializeApp({ projectId: "gerenciador-tarefas-bc5ab", appId: "1:752506458352:web:1d441ae91dd131d1f37235", storageBucket: "gerenciador-tarefas-bc5ab.firebasestorage.app", apiKey: "AIzaSyAlKBpSph_f1uGeqjhQTgfAt6jX1A8C1dg", authDomain: "gerenciador-tarefas-bc5ab.firebaseapp.com", messagingSenderId: "752506458352" })),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ]
};
