import Fabric from './../Fabric';
import { fabrics } from './../../arrays/fabrics';

const FabricGrid = () => (
  <div className="fabric-grid">
    {fabrics.map((fabric, i) => {
      return (
        <Fabric
          key={(`${fabric.brand}-${fabric.name}-${i}`).replace(/\s+/g, '-').toLowerCase()}
          brand={fabric.brand}
          // content
            // fiberType
            // percentage
          cost={fabric.cost}
          costPerYard={fabric.costPerYard}
          // image={}
          name={fabric.name}
          quantityInYards={fabric.quantityInYards}
          stretchPercentage={fabric.stretchPercentage}
          weight={fabric.weight}
          width={fabric.width}
        />
      )
    })}
  </div>
);

export default FabricGrid;
