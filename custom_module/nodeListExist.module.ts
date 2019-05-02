exports.str =`
/*@NodeListExist*/
export function NodeListExist(target: any, propertyName: string) {
     // property value
    let _val = propertyName;

    // property getter method
    const getter = () => {
        return _val;
    };

    // property setter method
    const setter = function (newVal:any)  {
        let context = this;
        let _newVala = newVal;
        let emptyCustomCode = () => {
            target.cunstomCode = function() {
                if(context.isDevelop) {
                    console.log(\`class or id does not exist : "\${_val}"\`);
                }
            }
        }
        
        if (typeof(_newVala) != 'undefined' && _newVala != null ) {
            if(_newVala.length != 0) {
                _val = _newVala;
                return _val;
            }else {
                emptyCustomCode();
            }
        }else {    
            emptyCustomCode();
        }
    };

    Object.defineProperty(target, propertyName, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}`;