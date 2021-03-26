import React, { useEffect, useState } from 'react';
import ItemsDisplay from './ItemsDisplay';
import { fetchStuff } from './Helper';

function Shop() {
  const departmentUrl = 'https://dummyproducts-api.herokuapp.com/api/v1/departments';
  const [departments, setDepartments] = useState([]);
  const [items, setItems] = useState([]);

  const displayDepartments = () => {
    return departments.map((department) => {
      return (
        <div key={department.department_id} className="department">
          <p
            onClick={() =>
              fetchStuff(`${departmentUrl}/${department.department_id}`, setItems, 'items')
            }
          >
            {department.department_name}
          </p>
        </div>
      );
    });
  };

  useEffect(() => {
    fetchStuff(`${departmentUrl}`, setDepartments, 'departments');
    fetchStuff(`${departmentUrl}/accessories`, setItems, 'items');
  }, []);

  //console.log(departments, items);

  return (
    <div className="Shop">
      <div className="shopOverview">
        <div className="departments">
          <h2>Categories</h2>
          {displayDepartments()}
        </div>

        <div className="shopItems">
          <h1>{items[0] && items[0].product_department}</h1>
          <ItemsDisplay items={items} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
