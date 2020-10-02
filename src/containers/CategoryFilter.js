import React from 'react';
import PropTypes from 'prop-types';
import categoryOptions from './constants';

function CategoryFilter({ category, handleFilterCategory }) {
  const newCategoryOptions = (['ALL']).concat(categoryOptions);
  const options = newCategoryOptions.map(categoryItem => (
    <option
      value={categoryItem}
      key={categoryItem}
    >
      {categoryItem}
    </option>
  ));

  return (
    <div className="input-field">
      <label htmlFor="category">
        Category
        <select id="category" value={category} onChange={handleFilterCategory}>
          {options}
        </select>
      </label>
    </div>

  );
}

CategoryFilter.propTypes = {
  category: PropTypes.string.isRequired,
  handleFilterCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;
