import Fabric from './Fabric';
import { fabricArray } from './arrays';

const FabricGrid = () => (
  <div className="fabric-grid">
    {fabricArray.map((fabric, i) => {
      return (
        <Fabric
          key={(`${fabric.brand}-${fabric.name}-${i}`).replace(/\s+/g, '-').toLowerCase()}
          brand={fabric.brand}
          name={fabric.name}
        />
      )
    })}
  </div>
);

export default FabricGrid;
