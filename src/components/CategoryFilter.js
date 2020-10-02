import React from 'react';
import PropTypes from 'prop-types';
import categoryOptions from '../containers/constants';

function CategoryFilter({ category, handleCategory }) {
  const newCategoryOptions = (['ALL']).concat(categoryOptions);
  const options = newCategoryOptions.map(cat => (
    <option
      value={cat}
      key={cat}
    >
      {cat}
    </option>
  ));

  return (
    <div className="input-field">
      <label htmlFor="category">
        Category
        <select id="category" value={category} onChange={handleCategory}>
          {options}
        </select>
      </label>
    </div>

  );
}

CategoryFilter.propTypes = {
  category: PropTypes.string.isRequired,
  handleCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;
