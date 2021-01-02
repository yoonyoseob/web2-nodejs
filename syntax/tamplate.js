var name = 'yosub';
var letter = 'Dear '+name+'\
\n\ndsfkldwasf dsfhjkaf dfklsaf '+name+' jdsklf; dfaklf;dsfjk dskfjsadfjlfyewckv dfkla;fsdfskdflsafdjfklas dfjskdlfadfjhtk '+name+' djf kldasfsysdfsktetkfsdfg '+name+' dsfl dsfydtekla';

console.log(letter);

//template literal
var letter = `Dear ${name}

dsfkldwasf dsfhjkaf dfklsaf +${name}+ jdsklf; dfaklf;dsfjk dskfjsadfjlfyewckv dfkla;fsdfskdflsafdjfklas dfjskdlfadfjhtk +${name}+ djf kldasfsysdfsktetkfsdfg +${name}+ dsfl dsfydtekla`;

console.log(letter);

//more convienient for using this skills, we don't have to use \n thing.