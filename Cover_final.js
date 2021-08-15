(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Cover_final_atlas_", frames: [[0,0,1905,1633]]},
		{name:"Cover_final_atlas_2", frames: [[1378,0,667,1626],[692,0,684,1626],[0,0,690,1626]]},
		{name:"Cover_final_atlas_3", frames: [[1240,0,547,1626],[640,0,598,1626],[0,0,638,1626]]},
		{name:"Cover_final_atlas_4", frames: [[0,0,1721,491]]},
		{name:"Cover_final_atlas_5", frames: [[1224,0,227,1626],[898,0,324,1626],[486,0,410,1626],[0,0,484,1626],[1453,0,244,491]]}
];


// symbols:



(lib.building_1 = function() {
	this.initialize(img.building_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1944,2592);


(lib.CachedTexturedBitmap_751 = function() {
	this.initialize(ss["Cover_final_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_752 = function() {
	this.initialize(ss["Cover_final_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_753 = function() {
	this.initialize(ss["Cover_final_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_754 = function() {
	this.initialize(ss["Cover_final_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_755 = function() {
	this.initialize(ss["Cover_final_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_756 = function() {
	this.initialize(ss["Cover_final_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_757 = function() {
	this.initialize(ss["Cover_final_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_758 = function() {
	this.initialize(ss["Cover_final_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_759 = function() {
	this.initialize(ss["Cover_final_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_760 = function() {
	this.initialize(ss["Cover_final_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_761 = function() {
	this.initialize(ss["Cover_final_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_762 = function() {
	this.initialize(ss["Cover_final_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_763 = function() {
	this.initialize(ss["Cover_final_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.character = function() {
	this.initialize(img.character);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1944,2592);


(lib.eye_layer = function() {
	this.initialize(img.eye_layer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1944,2592);


(lib.image_plane = function() {
	this.initialize(img.image_plane);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1944,2592);


(lib.myths = function() {
	this.initialize(img.myths);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2402,834);


(lib.stairs_front = function() {
	this.initialize(img.stairs_front);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1944,2592);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol_3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_763();
	this.instance.parent = this;
	this.instance.setTransform(760.75,-21.05,0.9817,0.9817);

	this.instance_1 = new lib.CachedTexturedBitmap_762();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-32.95,-21.1,0.9817,0.9817);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_3_Layer_1, null, null);


(lib.Scene_1_image_plane_png = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// image_plane_png
	this.instance = new lib.image_plane();
	this.instance.parent = this;
	this.instance.setTransform(-24,-20,0.5093,0.5093);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_floor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// floor
	this.instance = new lib.stairs_front();
	this.instance.parent = this;
	this.instance.setTransform(-20,-19,0.5093,0.5093);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_character = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// character
	this.instance = new lib.character();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20,0.5093,0.5093);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

}).prototype = p = new cjs.MovieClip();


(lib.red_lighting_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_761();
	this.instance.parent = this;
	this.instance.setTransform(-4.95,0,0.9817,0.9817);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.red_lighting_Layer_1, null, null);


(lib.eye_transform_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.eye_layer();
	this.instance.parent = this;
	this.instance.setTransform(0,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.eye_transform_Layer_1, null, null);


(lib.eye_Hover_over_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedTexturedBitmap_751();
	this.instance.parent = this;
	this.instance.setTransform(886.15,-4.95,0.8034,0.8034);

	this.instance_1 = new lib.CachedTexturedBitmap_752();
	this.instance_1.parent = this;
	this.instance_1.setTransform(848.65,-4.95,0.8034,0.8034);

	this.instance_2 = new lib.CachedTexturedBitmap_753();
	this.instance_2.parent = this;
	this.instance_2.setTransform(815.6,-4.95,0.8034,0.8034);

	this.instance_3 = new lib.CachedTexturedBitmap_754();
	this.instance_3.parent = this;
	this.instance_3.setTransform(786.9,-4.95,0.8034,0.8034);

	this.instance_4 = new lib.CachedTexturedBitmap_755();
	this.instance_4.parent = this;
	this.instance_4.setTransform(762.65,-4.95,0.8034,0.8034);

	this.instance_5 = new lib.CachedTexturedBitmap_756();
	this.instance_5.parent = this;
	this.instance_5.setTransform(742.8,-4.95,0.8034,0.8034);

	this.instance_6 = new lib.CachedTexturedBitmap_757();
	this.instance_6.parent = this;
	this.instance_6.setTransform(727.3,-4.95,0.8034,0.8034);

	this.instance_7 = new lib.CachedTexturedBitmap_758();
	this.instance_7.parent = this;
	this.instance_7.setTransform(716.3,-4.95,0.8034,0.8034);

	this.instance_8 = new lib.CachedTexturedBitmap_759();
	this.instance_8.parent = this;
	this.instance_8.setTransform(709.7,-4.95,0.8034,0.8034);

	this.instance_9 = new lib.CachedTexturedBitmap_760();
	this.instance_9.parent = this;
	this.instance_9.setTransform(707.5,-4.95,0.8034,0.8034);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(16));

}).prototype = p = new cjs.MovieClip();


(lib.bg_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.building_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_2_Layer_1, null, null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(811.8,219.9,1,1,0,0,0,811.8,219.9);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-32.9,-21.1,1689.4,482.1), null);


(lib.Scene_1_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(481.2,133.25,0.5093,0.5093,0,0,0,869,301.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

}).prototype = p = new cjs.MovieClip();


(lib.red_lighting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.red_lighting_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(930.1,801.5,1,1,0,0,0,930.1,801.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.red_lighting, new cjs.Rectangle(-4.9,0,1870,1603.1), null);


(lib.eye_transform = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.eye_transform_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(972,1247,1,1,0,0,0,972,1247);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.eye_transform, new cjs.Rectangle(0,-49,1944,2592), null);


(lib.eye_Hover_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.___loopingOver___ = true;
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer_2_obj_
	this.Layer_2 = new lib.eye_Hover_over_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.setTransform(977.3,648.2,1,1,0,0,0,977.3,648.2);
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 0
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(707.5,-4.9,554.4000000000001,1306.3000000000002);


(lib.bg_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.bg_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(972,1296,1,1,0,0,0,972,1296);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_2, new cjs.Rectangle(0,0,1944,2592), null);


(lib.shadow_1_Layer_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.instance = new lib.red_lighting();
	this.instance.parent = this;
	this.instance.setTransform(928.2,-317.2,1,1,0,0,0,930,801.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow_1_Layer_6, null, null);


(lib.shadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6_obj_
	this.Layer_6 = new lib.shadow_1_Layer_6();
	this.Layer_6.name = "Layer_6";
	this.Layer_6.parent = this;
	this.Layer_6.setTransform(928.2,-316.9,1,1,0,0,0,928.2,-316.9);
	this.Layer_6.depth = 0;
	this.Layer_6.isAttachedToCamera = 0
	this.Layer_6.isAttachedToMask = 0
	this.Layer_6.layerDepth = 0
	this.Layer_6.layerIndex = 0
	this.Layer_6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow_1, new cjs.Rectangle(-6.7,-1118.4,1870,1603.1000000000001), null);


(lib.Scene_1_light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// light
	this.instance = new lib.shadow_1();
	this.instance.parent = this;
	this.instance.setTransform(333.15,1192.35,0.5093,0.5093,0,0,0,338.5,233.6);
	this.instance.alpha = 0.4492;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.ColorFilter(0.69140625, 0.69140625, 0.69140625, 1, 79, 79, 0, 0), new cjs.BlurFilter(5, 5, 3)];
	this.instance.cache(-9,-1120,1874,1607);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.bg_2();
	this.instance.parent = this;
	this.instance.setTransform(447.15,706.05,0.5093,0.5093,0,0,0,972.1,1296.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:972,regY:1296,x:447.1,y:705.9},0).wait(1).to({y:705.65},0).wait(1).to({y:705.25},0).wait(1).to({y:704.65},0).wait(1).to({y:703.9},0).wait(1).to({y:703},0).wait(1).to({y:701.9},0).wait(1).to({y:700.65},0).wait(1).to({y:699.25},0).wait(1).to({y:697.7},0).wait(1).to({y:695.95},0).wait(1).to({y:694.05},0).wait(1).to({y:691.95},0).wait(1).to({x:447.15,y:689.75},0).wait(1).to({y:687.3},0).wait(1).to({regY:1296.2,y:684.75},0).wait(1).to({regY:1296,y:681.9},0).wait(1).to({y:679},0).wait(1).to({y:675.9},0).wait(1).to({y:672.65},0).wait(1).to({y:669.25},0).wait(1).to({y:665.65},0).wait(1).to({y:661.9},0).wait(1).to({y:658.05},0).wait(1).to({y:653.95},0).wait(1).to({y:649.7},0).wait(1).to({x:447.1,y:645.3},0).wait(1).to({y:640.7},0).wait(1).to({y:635.95},0).wait(1).to({y:631.05},0).wait(1).to({regX:972.1,regY:1296.1,x:447.15,y:626.05},0).wait(4));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_eye_layer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eye_layer
	this.instance = new lib.eye_transform();
	this.instance.parent = this;
	this.instance.setTransform(471.15,973,0.5093,0.5093,0,0,0,972.1,1296);

	this.instance_1 = new lib.eye_Hover_over();
	this.instance_1.parent = this;
	this.instance_1.setTransform(479.05,406.05,0.6224,0.6224,0,0,0,984.5,648);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},16).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance_1}]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:972,regY:1296.2,y:828.55},16,cjs.Ease.get(-1)).to({regX:972.1,regY:1296,y:693},15,cjs.Ease.get(1)).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.Cover_final = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		playSound("soothingnighttimeambience");
	}
	this.frame_16 = function() {
		playSound("_20180402__Beautiful_Village__David_Fesliyan");
	}
	this.frame_32 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_34 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(16).call(this.frame_32).wait(2).call(this.frame_34).wait(1));

	// light_obj_
	this.light = new lib.Scene_1_light();
	this.light.name = "light";
	this.light.parent = this;
	this.light.setTransform(633.6,912,1,1,0,0,0,633.6,912);
	this.light.depth = 0;
	this.light.isAttachedToCamera = 0
	this.light.isAttachedToMask = 0
	this.light.layerDepth = 0
	this.light.layerIndex = 0
	this.light.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.light).wait(35));

	// Layer_2_obj_
	this.Layer_2 = new lib.Scene_1_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.setTransform(452.1,91.6,1,1,0,0,0,452.1,91.6);
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 1
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(35));

	// floor_obj_
	this.floor = new lib.Scene_1_floor();
	this.floor.name = "floor";
	this.floor.parent = this;
	this.floor.setTransform(475.1,641.1,1,1,0,0,0,475.1,641.1);
	this.floor.depth = 0;
	this.floor.isAttachedToCamera = 0
	this.floor.isAttachedToMask = 0
	this.floor.layerDepth = 0
	this.floor.layerIndex = 2
	this.floor.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.floor).wait(35));

	// character_obj_
	this.character = new lib.Scene_1_character();
	this.character.name = "character";
	this.character.parent = this;
	this.character.setTransform(475.1,640.1,1,1,0,0,0,475.1,640.1);
	this.character.depth = 0;
	this.character.isAttachedToCamera = 0
	this.character.isAttachedToMask = 0
	this.character.layerDepth = 0
	this.character.layerIndex = 3
	this.character.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.character).wait(35));

	// eye_layer_obj_
	this.eye_layer = new lib.Scene_1_eye_layer();
	this.eye_layer.name = "eye_layer";
	this.eye_layer.parent = this;
	this.eye_layer.setTransform(471.1,948.1,1,1,0,0,0,471.1,948.1);
	this.eye_layer.depth = 0;
	this.eye_layer.isAttachedToCamera = 0
	this.eye_layer.isAttachedToMask = 0
	this.eye_layer.layerDepth = 0
	this.eye_layer.layerIndex = 4
	this.eye_layer.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.eye_layer).wait(35));

	// Layer_5_obj_
	this.Layer_5 = new lib.Scene_1_Layer_5();
	this.Layer_5.name = "Layer_5";
	this.Layer_5.parent = this;
	this.Layer_5.setTransform(447.1,706,1,1,0,0,0,447.1,706);
	this.Layer_5.depth = 0;
	this.Layer_5.isAttachedToCamera = 0
	this.Layer_5.isAttachedToMask = 0
	this.Layer_5.layerDepth = 0
	this.Layer_5.layerIndex = 5
	this.Layer_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_5).wait(1).to({regY:666,y:666},0).wait(15).to({regY:706,y:706},0).wait(1).to({regY:666,y:666},0).wait(14).to({regY:706,y:706},0).wait(4));

	// image_plane_png_obj_
	this.image_plane_png = new lib.Scene_1_image_plane_png();
	this.image_plane_png.name = "image_plane_png";
	this.image_plane_png.parent = this;
	this.image_plane_png.setTransform(471.1,640.1,1,1,0,0,0,471.1,640.1);
	this.image_plane_png.depth = 0;
	this.image_plane_png.isAttachedToCamera = 0
	this.image_plane_png.isAttachedToMask = 0
	this.image_plane_png.layerDepth = 0
	this.image_plane_png.layerIndex = 6
	this.image_plane_png.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.image_plane_png).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(403.5,605.9,716.8,1002.3000000000001);
// library properties:
lib.properties = {
	id: '156E1D12D776404FA27B946EBBD7C211',
	width: 903,
	height: 1280,
	fps: 24,
	color: "#0099CC",
	opacity: 1.00,
	manifest: [
		{src:"images/building_1.png?1629037088069", id:"building_1"},
		{src:"images/character.png?1629037088069", id:"character"},
		{src:"images/eye_layer.png?1629037088069", id:"eye_layer"},
		{src:"images/image_plane.png?1629037088069", id:"image_plane"},
		{src:"images/myths.png?1629037088069", id:"myths"},
		{src:"images/stairs_front.png?1629037088069", id:"stairs_front"},
		{src:"images/Cover_final_atlas_.png?1629037088019", id:"Cover_final_atlas_"},
		{src:"images/Cover_final_atlas_2.png?1629037088019", id:"Cover_final_atlas_2"},
		{src:"images/Cover_final_atlas_3.png?1629037088020", id:"Cover_final_atlas_3"},
		{src:"images/Cover_final_atlas_4.png?1629037088020", id:"Cover_final_atlas_4"},
		{src:"images/Cover_final_atlas_5.png?1629037088020", id:"Cover_final_atlas_5"},
		{src:"sounds/_20180402__Beautiful_Village__David_Fesliyan.mp3?1629037088069", id:"_20180402__Beautiful_Village__David_Fesliyan"},
		{src:"sounds/soothingnighttimeambience.mp3?1629037088069", id:"soothingnighttimeambience"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['156E1D12D776404FA27B946EBBD7C211'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;