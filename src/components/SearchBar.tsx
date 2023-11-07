import React from 'react';

interface SearchBarProps {
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm); 
  };

  return (
    <div>
    <h1>Carrinho de Compras</h1> 

      <input
        type="text"
        placeholder="Buscar itens"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
