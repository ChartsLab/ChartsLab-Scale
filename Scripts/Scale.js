/**
 * TODO
 * Write Docs
 * Test Functions
 * Fix Nice
 * @returns {Scale}
 */

function Scale(){
    this.mDomain = [];
    this.mRange = [];
    this.mClamp = false;
    this.mReverse = false;
    this.mNiceRound = false;
    this.mRoundValues = true;
    //  Tick Properety
    this.mTickValues = null;
    this.mTickNumber = 10;
    
    this.mColorCategoryNumber = 100;
    this.mLogBase = Math.LN10;
    this.mExponent = 0.0;
}

Scale.prototype.Domain = function (domainArray) {
    this.mDomain = domainArray;
    return this;
};

Scale.prototype.Range = function (rangeArray) {
    this.mRange = rangeArray;
    return this;
};

Scale.prototype.Clamp = function (flag = true) {
    this.mClamp = flag;
    return this;
};

Scale.prototype.Reverse = function (flag = true) {
    this.mReverse = flag;
    return this;
};

Scale.prototype.Nice = function (flag = true) {
    this.mNiceRound = flag;
    return this;
};

Scale.prototype.Round = function (flag = true) {
    this.mRoundValues = flag;
    return this;
};

Scale.prototype.Ticks = function (array) {
    this.mTickValues = array;
    return this;
};

Scale.prototype.Base = function (base) {
    if (base === 1) {
        this.mLogBase = base;
    }else if (base === 2) {
        this.mLogBase = Math.LOG2E;
    }else if (base === 10) {
        this.mLogBase = Math.LOG10E;
    }
    return this;
};

Scale.prototype.Exp = function (exp) {
    this.mExponent = exp;
    return this;
};

Scale.prototype.Linear = function () {
    var r = this.mRange, d = this.mDomain, c = this.mClamp, v = this.mReverse, n = this.mNiceRound;
    
    if (n === true) {
        r[0] = Math.round(this.mRange[0]);
        r[1] = Math.round(this.mRange[1]);
        d[0] = Math.round(this.mDomain[0]);
        d[1] = Math.round(this.mDomain[1]);
    }
    
    return {
        scale : function(value){
            if(c === true)
                value = Util.Clamp(value, d);

            if(v === true){
                if (n === true) {
                    return Util.Map(value, [d[1], d[0]], r);
                }
                return Math.abs(Util.Map(value, [d[1], d[0]], r));
            }
            else{
                if (n === true) {
                    return Util.Map(value, d, r);
                }
                return Util.Map(value, d, r);
            }
        }, 
        ticks : this.mTickValues
    };
};

Scale.prototype.Power = function () {
    var r = this.mRange, d = this.mDomain, p = this.mExponent , c = this.mClamp, v = this.mReverse, n = this.mNiceRound, u = this.mRoundValues;
    
    if (n === true) {
        r[0] = Math.round(this.mRange[0]);
        r[1] = Math.round(this.mRange[1]);
        d[0] = Math.round(this.mDomain[0]);
        d[1] = Math.round(this.mDomain[1]);
    }
    
    return {
        scale : function(value){
            var dd = [];
            dd[0] = Math.pow(d[0], p);
            dd[1] = Math.pow(d[1], p);
            
            value = Math.pow(value, p);
            if(c === true)
                value = Util.Clamp(value, r);

            if(v === true){
                if (u === true) {
                    return Math.round(Math.exp(Util.Map(value, r, [d[1], d[0]])));
                }else{
                    return Math.exp(Util.Map(value, r, [d[1], d[0]]));
                }
            }
            else{
                if (u === true) {
                    return Math.round((Util.Map(value, dd, r)));
                }else{
                    return Math.exp(Util.Map(value, dd, r));
                }
            }
        },
        ticks : this.mTickValues
    };
};

Scale.prototype.SqRoot = function () {
    var r = this.mRange, d = this.mDomain, c = this.mClamp, v = this.mReverse, n = this.mNiceRound, u = this.mRoundValues;
    
    if (n === true) {
        r[0] = Math.round(this.mRange[0]);
        r[1] = Math.round(this.mRange[1]);
        d[0] = Math.round(this.mDomain[0]);
        d[1] = Math.round(this.mDomain[1]);
    }
    
    return {
        scale : function(value){
            var dd = [];
            dd[0] = Math.sqrt(d[0]);
            dd[1] = Math.sqrt(d[1]);
            
            value = Math.sqrt(value);
            if(c === true)
                value = Util.Clamp(value, r);

            if(v === true){
                if (u === true) {
                    return Math.round(Math.exp(Util.Map(value, r, [d[1], d[0]])));
                }else{
                    return Math.exp(Util.Map(value, r, [d[1], d[0]]));
                }
            }
            else{
                if (u === true) {
                    return Math.round((Util.Map(value, dd, r)));
                }else{
                    return Math.exp(Util.Map(value, dd, r));
                }
            }
        },
        ticks : this.mTickValues
    };
};

Scale.prototype.Log = function () {
    var r = this.mRange, d = this.mDomain, l = this.mLogBase, c = this.mClamp, v = this.mReverse, n = this.mNiceRound, u = this.mRoundValues;
    
    if (n === true) {
        r[0] = Math.round(this.mRange[0]);
        r[1] = Math.round(this.mRange[1]);
        d[0] = Math.round(this.mDomain[0]);
        d[1] = Math.round(this.mDomain[1]);
    }
    
    return {
        scale : function(value){
            var dd = [];
            dd[0] = Math.log(d[0]);
            dd[1] = Math.log(d[1]);
            
            value = Math.log(value);
            if(c === true)
                value = Util.Clamp(value, r);

            if(v === true){
                if (u === true) {
                    return Math.round(Math.exp(Util.Map(value, r, [d[1], d[0]])));
                }else{
                    return Math.exp(Util.Map(value, r, [d[1], d[0]]));
                }
            }
            else{
                if (u === true) {
                    return Math.round((Util.Map(value, dd, r)));
                }else{
                    return Math.exp(Util.Map(value, dd, r));
                }
            }
        },
        ticks : this.mTickValues
    };
};

Scale.prototype.ColorCategory = function (percent) {
    this.mColorCategoryNumber = percent;
    return this;
};

Scale.prototype.Color = function () {
    var r = this.mRange, d = this.mDomain, c = this.mClamp, v = this.mReverse, clr = this.mColorCategoryNumber;
    
    
    return function(value){
        if(c === true)
            value = Util.Clamp(value, d);
        
        if(v === true)
            return Util.Map(value, [d[1], d[0]], r);
        else
            return "hsl(50, " + clr + "% , " + Util.Map(value, d, r) + "%)";
    };
    return this;
};

var Util = Util || { };

Util.Norm = function (value, [min, max]) {
    return (value - min)/Math.abs(max - min);
};
Util.Map = function (value, [min, max], [newMin, newMax]) {
    var n = Util.Norm(value, [min, max]);
    return Util.Lerp(n, [newMin, newMax]);
};
Util.Lerp = function (value, [min, max]) {
    return Math.abs(max - min) * value + min;
};
Util.Clamp = function (value, [min, max]) {
    return Math.min(Math.max(value, min), max);
};