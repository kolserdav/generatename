'use strict';

module.exports = fu;

/**
 *
 * @returns {null}|{h.fullName}
 */
function fu()
{
    /**
     *
     * @constructor
     */
    function H(){}
    H.prototype.name = null;
    H.prototype.firstName = null;
    H.prototype.lastName = null;
    H.prototype.fullName = null;
    let h = new H();

    /**
     *
     * @type {string}
     */
    let uppercases = 'QWERTYUIOPASDFGHJKLMNBVCXZ',
        vovels = /[EYUIOAeyuioa]/,
        symVovels = 'eyuioa',
        symConsonans = 'qwrtpsdfghjklzxcvbnm';

    /**
     *
     * @type {string}
     */
    let lengthName = (Math.random()*12).toFixed(0);
    lengthName = (lengthName < 3)? 6 : lengthName;

    /**
     * Name generator
     */
    getName();

    return h.fullName;

    /**
     *
     * @param i
     * @returns {null}
     */
    function getName(i = 0) {

        if (i < lengthName){
            if (h.name === null){
                h.name = uppercases[(Math.random()*(uppercases.length - 1)).toFixed(0)];
                return getName(i +1);
            }
            else {
                if (h.name[i -1].match(vovels)){
                    h.name += symConsonans[(Math.random()*(symConsonans.length - 1)).toFixed(0)];
                    return getName(i + 1);
                }
                else{
                    h.name += symVovels[(Math.random()*(symVovels.length - 1)).toFixed(0)];
                    return getName(i + 1);
                }
            }
        }
        else {
            if (h.firstName === null){
                h.firstName = h.name;
                h.name = null;
                lengthName = (Math.random()*12).toFixed(0);
                lengthName = (lengthName < 3)? 6 : lengthName;
                return getName();
            }
            if (h.lastName === null && h.firstName !== null) {
                h.lastName = h.name;
                h.fullName = h.firstName +'_' +h.lastName;
            }
        }
        return h.fullName;
    }
}