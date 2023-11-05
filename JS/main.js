import i18next from 'i18next';
import i18nextHttpBackend from 'i18next-http-backend';

i18next
    .use(i18nextHttpBackend) // para cargar traducciones usando HTTP
    .init({
    lng: 'es', // idioma por defecto
    fallbackLng: 'en', // idioma de respaldo
    debug: true, // activar modo de depuración
    backend: {
      loadPath: '/locales/en-translation.json' // ruta donde se encuentran los archivos de traducción
    }
}, function(err, t) {
document.getElementById('content').innerHTML = i18next.t('welcome');
});