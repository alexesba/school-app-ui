export default (urls, { push, goBack }) => (
  (type, id) => {
    switch (type) {
      case 'back':
        return goBack();
      default:
        return push(urls[type].replace(':id', id));
    }
  }
);
