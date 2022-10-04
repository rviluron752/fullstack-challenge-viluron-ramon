import { useEffect, useState } from 'react';
import { getTags } from '../../service';
import Tag from './Tag';
import './Tags.css';

const Tags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getTags()
      .then((data) => setTags(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='tag-container'>
      <h2 className='tag-title'>Tags</h2>
      {tags.length > 0 ? (
          tags.map((tag) => (
            <Tag key={tag.id} tag={tag} />
          ))
      ): (
        <span>Cargado Tags</span>
      )
      }
    </div>
  );
};

export default Tags;