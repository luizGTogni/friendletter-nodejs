export default function redirect(path) {
  setTimeout(() => {
    window.location.pathname = path;
  }, 2000);
}