import './sass/index.sass';
function requireAll(r) {
    r.keys().forEach(r);
}
requireAll(require.context('./img/', true, /\.svg$/));
import './js/aside';