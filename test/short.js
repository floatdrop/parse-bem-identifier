/* global describe, it */
import parseBemId from '../index.js'
import should from 'should'

var parse = function (string) {
    return parseBemId(string, { short: true });
};

describe('parse.short', function () {
    it('should parse block', function () {
        parse('block').should.eql({ block: 'block' });
    });

    it('should parse block_mod', function () {
        parse('block_mod')
        .should.eql({block: 'block', mod: 'mod' });
    });

    it('should parse block_mod_true', function () {
        parse('block_mod_true')
        .should.eql({block: 'block', mod: 'mod', val: 'true' });
    });

    it('should parse block__elem', function () {
        parse('block__elem')
        .should.eql({block: 'block', elem: 'elem'});
    });

    it('should parse block__elem_mod', function () {
        parse('block__elem_mod')
        .should.eql({
            block: 'block',
            elem: 'elem',
            mod: 'mod'
        });
    });

    it('should parse block__elem_mod_true', function () {
        parse('block__elem_mod_true')
        .should.eql({
            block: 'block',
            elem: 'elem',
            mod: 'mod',
            val: 'true'
        });
    });

    it('should parse block_mod__elem', function () {
        parse('block_mod__elem')
        .should.eql({
            block: 'block',
            mod: 'mod',
            elem: 'elem'
        });
    });

    it('should parse block_mod__elem_mod', function () {
        parse('block_mod__elem_mod')
        .should.eql({
            block: 'block',
            elem: 'elem', mod: 'mod'
        });
    });

    it('should parse block_mod_value__elem_mod_value', function () {
        parse('block_mod_true__elem_mod_true')
        .should.eql({
            block: 'block',
            elem: 'elem',
            mod: 'mod',
            val: 'true'
        });
    });
});
