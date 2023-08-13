import React from 'react';
import Card from '../components/Card';
import Data from '../Data/Data';

const DataScience = () => {
  const dataScience = Data.filter(course => course.category === 'datascience');

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className="course-list">
            {dataScience.map(course => (
              <Card
                key={course.id}
                title={course.title}
                description={course.description}
                image={course.image}
                link={course.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DataScience;
