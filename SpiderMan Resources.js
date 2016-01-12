var dfg=0;
var ho=0;
var gs;

function modTick ()
{
dx=Math.floor(Entity.getVelX(gs));
		dy=Math.floor(Entity.getVelY(gs));
		dz=Math.floor(Entity.getVelZ(gs));
				if(ho==2){
if(Math.sqrt(dx*dx+dz*dz)==0) 
{
var qx=Entity.getX(gs);
		var qy=Entity.getY(gs);
		var qz=Entity.getZ(gs);
Entity.setPosition(pe,qx,qy+2,qz);
Entity.remove(gs);
ho=0;
		}
		}
