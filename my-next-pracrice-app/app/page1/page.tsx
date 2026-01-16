import NoteList from '@/components/NoteList';
import { getNotes } from '@/lib/api';

const Page = async () => {
  const res = await getNotes();
  console.log('notes', res);

  return (
    <div>
      <section>
        <h1>Notes List</h1>
        {res?.notes?.length > 0 && <NoteList notes={res.notes} />}
      </section>
    </div>
  );
};

export default Page;
