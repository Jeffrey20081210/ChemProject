
const testCases = ['MnO4-', 'Fe2+', 'Fe3+', 'H+', 'Mn2+', 'PO43-', 'NO3-', 'NH4+', 'Cl-', 'SO42-'];

function render(f) {
    let base = f;
    let charge = '';
    
    const chargeMatch = f.match(/^(.*?)(\d*)([+\-−]+)$/);
    if (chargeMatch) {
        let pre = chargeMatch[1];
        let nums = chargeMatch[2];
        let signs = chargeMatch[3].replace(/−/g, '-'); 
        
        if (nums.length === 0) {
            base = pre;
            charge = signs;
        } else if (nums.length > 1) {
            base = pre + nums.slice(0, -1);
            charge = nums.slice(-1) + signs;
        } else {
            const n = parseInt(nums);
            if (n >= 4) {
                base = pre + nums;
                charge = signs;
            } else {
                const lastElMatch = pre.match(/[A-Z][a-z]?$/);
                const lastEl = lastElMatch ? lastElMatch[0] : '';
                const subscriptable = ['O', 'H', 'F', 'Cl', 'Br', 'I'];
                
                if (subscriptable.includes(lastEl)) {
                    base = pre + nums;
                    charge = signs;
                } else {
                    base = pre;
                    charge = nums + signs;
                }
            }
        }
    }
    
    let baseHtml = base.replace(/(\d+)/g, '<sub>$1</sub>');
    const chargeHtml = charge ? `<sup>${charge}</sup>` : '';
    
    console.log(`${f} -> Base: "${base}", Charge: "${charge}" -> HTML: ${baseHtml}${chargeHtml}`);
}

testCases.forEach(render);
