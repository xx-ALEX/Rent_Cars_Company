export const parseCurrentURL = () => {
    const urlParts = {};

    [urlParts.page, urlParts.id, urlParts.action] = location.hash.slice(2).split('/');

    return urlParts;
};