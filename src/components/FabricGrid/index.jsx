import Fabric from './../Fabric';
import { fabrics } from './../../arrays/fabrics';

const FabricGrid = () => (
  <div className="fabric-grid">
    {fabrics.map((fabric, i) => {
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
