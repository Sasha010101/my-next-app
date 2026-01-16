import { Note } from '@/lib/api';
import css from './NoteItem.module.css';
type Props = {
  item: Note;
};

const NoteItem = ({ item }: Props) => {
  return (
    <div className={css['noteItem']}>
      <li>
        <p>{item.content}</p>
      </li>
    </div>
  );
};

export default NoteItem;
