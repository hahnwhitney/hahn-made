import Thread from './../Thread';
import { threads } from './../../arrays/threads';

const ThreadGrid = () => (
  <div className="thread-grid">
    {threads.map((thread, i) => {
       return (
        <Thread
          key={(`${thread.color}-${i}`).replace(/\s+/g, '-').toLowerCase()}
          brand={thread.brand}
          color={thread.color}
          colorHex={thread.colorHex}
          colorId={thread.colorId}
          content={thread.content}
          cost={thread.cost}
          quantityInYards={thread.quantityInYards}
          type={thread.type}
          isCone={thread.isCone}
        />)
    })}
  </div>
);

export default ThreadGrid;