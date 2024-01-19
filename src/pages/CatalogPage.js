const { AutoGallery } = require('components/AutoGallery/AutoGallery');
const { SearchBar } = require('components/SearchBar/SearchBar');

const CatalogPage = () => {
  return (
    <>
      <SearchBar />
      <AutoGallery />
    </>
  );
};

export default CatalogPage;
