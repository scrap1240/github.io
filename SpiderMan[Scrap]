//ctx변수선언
const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();



var folder = new java.io.File(sdcard+"/Scrap/");

folder.mkdir();
var X,Y,Z;
var sec=0;
var t=0;
var gs;
var s=false;
var version="2.0";
var ax,ay,az;
var hell;
var hel;
var dfg=0;
var ho=0;
var gx;
//일반변수
var count=1;
var w1 = new android.widget.PopupWindow();
var w2 = new android.widget.PopupWindow();
var w3 = new android.widget.PopupWindow();
var w4 = new android.widget.PopupWindow();
var w5 = new android.widget.PopupWindow();
var guiFile = new android.graphics.BitmapFactory.decodeStream( ModPE.openInputStreamFromTexturePack("images/gui/spritesheet.png") );
var newButtonImage = android.graphics.Bitmap.createScaledBitmap( android.graphics.Bitmap.createBitmap( guiFile, 8, 32, 8, 8 ), dips( 8 ), dips( 8 ), false );
var newButtonImage2 = android.graphics.Bitmap.createScaledBitmap( android.graphics.Bitmap.createBitmap( guiFile, 0, 32, 8, 8 ), dips( 8 ), dips( 8 ), false );
var newButtonImage3 = android.graphics.Bitmap.createScaledBitmap( android.graphics.Bitmap.createBitmap( guiFile, 0, 32, 8, 8 ), dips( 8 ), dips( 8 ), false );
var newButtonImage4 = android.graphics.Bitmap.createScaledBitmap( android.graphics.Bitmap.createBitmap( guiFile, 0, 32, 8, 8 ), dips( 8 ), dips( 8 ), false );
var newButtonImage5 = android.graphics.Bitmap.createScaledBitmap( android.graphics.Bitmap.createBitmap( guiFile, 0, 32, 8, 8 ), dips( 8 ), dips( 8 ), false );

//커스텀함수
//맵입장시 버튼추가
function newLevel(){
ModPE.overrideTexture("images/mob/custom.png","http://mblogthumb4.phinf.naver.net/20160110_99/ght07_14524019641541qhaV_PNG/skin_20150517044926107986-1.png?type=w2");
button1();
button2();
button3();
button4();
button5();
}


//서버입장시 버튼추가
function server() {
var ga = Server.getAddress();
var gp = Server.getPort();
if(Server.joinServer(ga,gp)); {
button1();
button2();
button3();
button4();
button5();
}
}

//맵퇴장시 버튼제거
function leaveGame()
{ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
w1.dismiss();
w2.dismiss();
w3.dismiss();
w4.dismiss();
w5.dismiss();
}}));}

//bip,dip2px 추가
function dip2px( ctx,dips )	{
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
function dips( dips )	{
return Math.ceil( dips * ctx.getResources().getDisplayMetrics().density );
}

//토스트추가
function toast(msg) {
ctx.runOnUiThread(new java.lang.Runnable({run: function(){
android.widget.Toast.makeText(ctx, msg, android.widget.Toast.LENGTH_LONG).show(); //토스트의 팝업시간을 길게(LENGTH_LONG)하여 띄움
}}));
}

//나인패치 추가 → 아보카도맨
function createNinePatch( bitmap, x, y, xx, yy)
{
var NO_COLOR = 0x00000001;
var buffer = java.nio.ByteBuffer.allocate(56).order(java.nio.ByteOrder.nativeOrder());
buffer.put(0x01);
buffer.put(0x02);
buffer.put(0x02); 
buffer.put(0x02);
buffer.putInt(0); 
buffer.putInt(0); 
buffer.putInt(0);
buffer.putInt(0);
buffer.putInt(0); 
buffer.putInt(0);
buffer.putInt(0);
buffer.putInt(y-1); 
buffer.putInt(yy);
buffer.putInt(x-1); 
buffer.putInt(xx); 
buffer.putInt(NO_COLOR);
buffer.putInt(NO_COLOR); 
var drawable = new android.graphics.drawable.NinePatchDrawable(ctx.getResources(), bitmap, buffer.array(), new android.graphics.Rect(), null);
return drawable;
}

//shift 버튼
function button1()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
try{
var l = new android.widget.LinearLayout(ctx);
var b = new android.widget.Button(ctx);
b.setText("Web");
b.setBackgroundDrawable(createNinePatch(newButtonImage , dips( 3 ),dips( 3 ),dips( 6 ),dips( 6 ) ));
b.setOnTouchListener(new android.view.View.OnTouchListener(){onTouch:function(p1,p2){
if(p2.getAction()==0){
b.setBackgroundDrawable(createNinePatch(newButtonImage2 , dips( 3 ),dips( 3 ),dips( 6 ),dips( 6 ) ));}
if(p2.getAction()==1){
var s = new java.lang.Runnable( 
		{ 
			run: function()
			{
				x=Math.floor(getPlayerX());
				y=Math.floor(getPlayerY()-2);
				z=Math.floor(getPlayerZ());
				pe=getPlayerEnt();
				yaw=Math.floor(getYaw());
				pitch=Math.floor(getPitch());
				sin=-Math.sin(yaw/180*Math.PI);
				cos=Math.cos(yaw/180*Math.PI);
				tan=Math.sin(pitch/180*Math.PI);
				pcos=Math.cos(pitch/180*Math.PI);
	
				for(i=5; i<100; i+=2)
				{
					java.lang.Thread.sleep (100);
					setTile(x+i*sin*pcos,y+1+i*tan,z+i*cos*pcos,30);
setTile(x+i*sin*pcos,y+1+i*tan,z-1+i*cos*pcos,30);
setTile(x+i*sin*pcos,y+1+i*tan,z+1+i*cos*pcos,30);
setTile(x+i*sin*pcos,y+2+i*tan,z+i*cos*pcos,30);
setTile(x+i*sin*pcos,y+2+i*tan,z-1+i*cos*pcos,30);
setTile(x+i*sin*pcos,y+2+i*tan,z+1+i*cos*pcos,30);
setTile(x+i*sin*pcos,y+3+i*tan,z+i*cos*pcos,30);
setTile(x+i*sin*pcos,y+3+i*tan,z-1+i*cos*pcos,30);
setTile(x+i*sin*pcos,y+3+i*tan,z+1+i*cos*pcos,30);
setTile(x+1+i*sin*pcos,y+1+i*tan,z+i*cos*pcos,30);
setTile(x+1+i*sin*pcos,y+1+i*tan,z-1+i*cos*pcos,30);
setTile(x+1+i*sin*pcos,y+1+i*tan,z+1+i*cos*pcos,30);
setTile(x+1+i*sin*pcos,y+2+i*tan,z+i*cos*pcos,30);
setTile(x+1+i*sin*pcos,y+2+i*tan,z-1+i*cos*pcos,30);
setTile(x+1+i*sin*pcos,y+2+i*tan,z+1+i*cos*pcos,30);
setTile(x+1+i*sin*pcos,y+3+i*tan,z+i*cos*pcos,30);
setTile(x+1+i*sin*pcos,y+3+i*tan,z-1+i*cos*pcos,30);
setTile(x+1+i*sin*pcos,y+3+i*tan,z+1+i*cos*pcos,30);
setTile(x-1+i*sin*pcos,y+1+i*tan,z+i*cos*pcos,30);
setTile(x-1+i*sin*pcos,y+1+i*tan,z-1+i*cos*pcos,30);
setTile(x-1+i*sin*pcos,y+1+i*tan,z+1+i*cos*pcos,30);
setTile(x-1+i*sin*pcos,y+2+i*tan,z+i*cos*pcos,30);
setTile(x-1+i*sin*pcos,y+2+i*tan,z-1+i*cos*pcos,30);
setTile(x-1+i*sin*pcos,y+2+i*tan,z+1+i*cos*pcos,30);
setTile(x-1+i*sin*pcos,y+3+i*tan,z+i*cos*pcos,30);
setTile(x-1+i*sin*pcos,y+3+i*tan,z-1+i*cos*pcos,30);
setTile(x-1+i*sin*pcos,y+3+i*tan,z+1+i*cos*pcos,30);
				}
			} 
		} 
										); 
		new java.lang.Thread( s ).start();
b.setTextColor(android.graphics.Color.WHITE);
b.setBackgroundDrawable(createNinePatch(newButtonImage , dips( 3 ),dips( 3 ),dips( 6 ),dips( 6 ) ));}
return false;
}});
l.addView(b);
w1.setContentView(l);
w1.setWidth(dip2px(ctx, 65));
w1.setHeight(dip2px(ctx, 40));
w1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,300,800);
}catch(error){
print("[에러발생]"+error);
}
}}));
}
function button2()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
try{
var l1 = new android.widget.LinearLayout(ctx);
var b1 = new android.widget.Button(ctx);
b1.setText("Web2");
b1.setBackgroundDrawable(createNinePatch(newButtonImage , dips( 3 ),dips( 3 ),dips( 6 ),dips( 6 ) ));
b1.setOnTouchListener(new android.view.View.OnTouchListener(){onTouch:function(p1,p2){
if(p2.getAction()==0){
b1.setBackgroundDrawable(createNinePatch(newButtonImage2 , dips( 3 ),dips( 3 ),dips( 6 ),dips( 6 ) ));}
if(p2.getAction()==1){
var playerYaw = Entity.getYaw(Player.getEntity()); 
var playerPitch = Entity.getPitch(Player.getEntity());
         velY = Math.sin((playerPitch - 180) / 180 * Math.PI); 
            velX = 3.5 * (Math.sin(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI)); 
            velZ = 3.5 * (-1 * Math.cos(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI)); 
           var hell = Level.spawnMob(Player.getX() + Math.sin(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI) ,Player.getY(),Player.getZ() + -1 * Math.cos(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI) ,80);
            setVelX(hell,velX); 
            setVelY(hell,velY); 
            setVelZ(hell,velZ);
            dfg=1;
            ho=1;
b1.setTextColor(android.graphics.Color.WHITE);
b1.setBackgroundDrawable(createNinePatch(newButtonImage , dips( 3 ),dips( 3 ),dips( 6 ),dips( 6 ) ));}
return false;
}});
l1.addView(b1);
w2.setContentView(l1);
w2.setWidth(dip2px(ctx, 65));
w2.setHeight(dip2px(ctx, 40));
w2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,300,1000);
}catch(error){
print("[에러발생]"+error);
}
}}));
}
function button3()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
try{
var l2 = new android.widget.LinearLayout(ctx);
var b2 = new android.widget.Button(ctx);
b2.setText("Spider");
b2.setBackgroundDrawable(createNinePatch(newButtonImage , dips( 3 ),dips( 3 ),dips( 6 ),dips( 6 ) ));
b2.setOnTouchListener(new android.view.View.OnTouchListener(){onTouch:function(p1,p2){
if(p2.getAction()==0){
b2.setBackgroundDrawable(createNinePatch(newButtonImage2 , dips( 3 ),dips( 3 ),dips( 6 ),dips( 6 ) ));}
if(p2.getAction()==1)
download();

new java.lang.Thread({

run : function(){

java.lang.Thread.sleep(10000);

var msg = readFile().toString().split("d");

clientMessage(msg[1]);

}

}).start();
b2.setTextColor(android.graphics.Color.WHITE);
b2.setBackgroundDrawable(createNinePatch(newButtonImage , dips( 3 ),dips( 3 ),dips( 6 ),dips( 6 ) ));
return false;
}});
l2.addView(b2);
w3.setContentView(l2);
w3.setWidth(dip2px(ctx, 65));
w3.setHeight(dip2px(ctx, 40));
w3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,300,1200);
}catch(error){
print("[에러발생]"+error);
}
}}));
}
function button4()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
try{
var l3 = new android.widget.LinearLayout(ctx);
var b3 = new android.widget.Button(ctx);
b3.setText("Transfer");
b3.setBackgroundDrawable(createNinePatch(newButtonImage , dips( 3 ),dips( 3 ),dips( 6 ),dips( 6 ) ));
b3.setOnTouchListener(new android.view.View.OnTouchListener(){onTouch:function(p1,p2){
if(p2.getAction()==0){
b3.setBackgroundDrawable(createNinePatch(newButtonImage2 , dips( 3 ),dips( 3 ),dips( 6 ),dips( 6 ) ));}
if(p2.getAction()==1){
Entity.addEffect(getPlayerEnt(),MobEffect.damageResistance,30*60,10,false,true);
Entity.addEffect(getPlayerEnt(),MobEffect.damageBoost,30*60,10,false,true);
Entity.addEffect(getPlayerEnt(),MobEffect.jump,30*60,5,false,true);
Entity.addEffect(getPlayerEnt(),MobEffect.movementSpeed,30*60,5,false,true);
Entity.setMobSkin(getPlayerEnt(),"mob/custom.png");
sec=1800;
b3.setTextColor(android.graphics.Color.WHITE);
b3.setBackgroundDrawable(createNinePatch(newButtonImage , dips( 3 ),dips( 3 ),dips( 6 ),dips( 6 ) ));}
return false;
}});
l3.addView(b3);
w4.setContentView(l3);
w4.setWidth(dip2px(ctx, 65));
w4.setHeight(dip2px(ctx, 40));
w4.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,100,1200);
}catch(error){
print("[에러발생]"+error);
}
}}));
}
function button5()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
try{
var l4 = new android.widget.LinearLayout(ctx);
var b4 = new android.widget.Button(ctx);
b4.setText("Web3");
b4.setBackgroundDrawable(createNinePatch(newButtonImage , dips( 3 ),dips( 3 ),dips( 6 ),dips( 6 ) ));
b4.setOnTouchListener(new android.view.View.OnTouchListener(){onTouch:function(p1,p2){
if(p2.getAction()==0){
b4.setBackgroundDrawable(createNinePatch(newButtonImage2 , dips( 3 ),dips( 3 ),dips( 6 ),dips( 6 ) ));}
if(p2.getAction()==1){
var playerYaw = Entity.getYaw(Player.getEntity()); 
var playerPitch = Entity.getPitch(Player.getEntity());
         velY = Math.sin((playerPitch - 180) / 180 * Math.PI); 
            velX = 3.5 * (Math.sin(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI)); 
            velZ = 3.5 * (-1 * Math.cos(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI)); 
           var hel = Level.spawnMob(Player.getX() + Math.sin(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI) ,Player.getY(),Player.getZ() + -1 * Math.cos(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI) ,80);
            setVelX(hel,velX); 
            setVelY(hel,velY); 
            setVelZ(hel,velZ);
            dfg=2;
            ho=2;
b4.setTextColor(android.graphics.Color.WHITE);
b4.setBackgroundDrawable(createNinePatch(newButtonImage , dips( 3 ),dips( 3 ),dips( 6 ),dips( 6 ) ));}
return false;
}});
l4.addView(b4);
w5.setContentView(l4);
w5.setWidth(dip2px(ctx, 65));
w5.setHeight(dip2px(ctx, 40));
w5.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,100,1000);
}catch(error){
print("[에러발생]"+error);
}
}}));
}
function modTick ()
{
ax=Math.floor(Entity.getVelX(gx));
		ay=Math.floor(Entity.getVelY(gx));
		az=Math.floor(Entity.getVelZ(gx));
		pe=getPlayerEnt(); 
			if(ho==1) {
		
		var ex=Entity.getX(gx);
		var ey=Entity.getY(gx);
		var ez=Entity.getZ(gx);
		
		if(Math.sqrt(ax*ax+az*az)==0) {
			
			setTile(ex,ey,ez,30);
			setTile(ex+1,ey,ez,30);
			setTile(ex-1,ey,ez,30);
			setTile(ex,ey,ez+1,30);
			setTile(ex,ey,ez-1,30);
			setTile(ex+1,ey,ez+1,30);
			setTile(ex+1,ey,ez-1,30);
			setTile(ex-1,ey,ez+1,30);
			setTile(ex-1,ey,ez-1,30);
			Entity.remove(gx);
			ho=0;
		}
		}
		}
		function entityAddedHook (e)
		{
		if(Entity.getEntityTypeId(e)==80&&dfg==1)
		{
		gx=e;
		dfg=0;
		}	if(Entity.getEntityTypeId(e)==80&&dfg==2)
		{
		gs=e;
		dfg=0;
		}
		}
function download(){

ctx.runOnUiThread(new java.lang.Runnable({

run: function(){

try{

var file = new java.io.File(sdcard+"/Scrap/file.txt");

if(file.exists()) file.delete();

if(checkInternet()){

var uri = new android.net.Uri.parse("https://www.dropbox.com/s/qa7l8yfczh389a9/Updatefile.txt?dl=1");

var dm = new android.app.DownloadManager.Request(uri);

dm.setTitle("파일 다운로드");

dm.setDescription("파일 다운로드 중...");

dm.setDestinationInExternalPublicDir("Scrap", "file.txt");

dm.setNotificationVisibility(0);

ctx.getSystemService(android.content.Context.DOWNLOAD_SERVICE).enqueue(dm);

}

else{

clientMessage("인터넷이 연결을 다시 확인해 주세요!");
//인터넷 연결 안됨

}

}

catch(e){

print("다운로드 실패. 오류 : "+e);

}

}

}));

}



function checkInternet(){

try{

var cm = ctx.getSystemService(android.content.Context.CONNECTIVITY_SERVICE);

var mobile = cm.getNetworkInfo(cm.TYPE_MOBILE);

var wifi = cm.getNetworkInfo(cm.TYPE_WIFI);

if(mobile.isConnected()||wifi.isConnected()){

return true;

}

else{

return false;

}

}

catch(e){

try{

if(wifi.isConnected()){

return true;

}

}

catch(err){

print(err);

}

}

}



function readFile(){

try{

var file = new java.io.File(sdcard+"/Scrap/file.txt");

if(!(file.exists())) return "";

var fis = new java.io.FileInputStream(file);

var isr = new java.io.InputStreamReader(fis);

var br = new java.io.BufferedReader(isr);

var str = br.readLine();

var line = "";

while((line = br.readLine()) != null){

str += "\n" + line;

}

fis.close();

isr.close();

br.close();

return str;

}

catch(e){

clientMessage(e+", "+e.lineNumber);

}

}
function downFile(url,path,fileName)
{
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread( new java.lang.Runnable( {run: function(){
try{
var uri = new android.net.Uri.parse( url )
var request = new android.app.DownloadManager.Request( uri );
request.setTitle( fileName );
request.setDestinationInExternalPublicDir( path,fileName );
ctx.getSystemService( android.content.Context.DOWNLOAD_SERVICE ).enqueue( request );
}catch( e ){clientMessage( e )}
}} ) );
}
