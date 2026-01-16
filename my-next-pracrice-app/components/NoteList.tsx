import css from './NoteList.module.css';
import { Note } from '@/lib/api';
import NoteItem from './NoteItem';

type Props = {
  notes: Note[];
};

const NoteList = ({ notes }: Props) => {
  return (
    <div className={css['noteList']}>
      <ul>
        {notes.map(note => (
          <NoteItem key={note.id} item={note} />
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
