test("test 53+35=", t => {
    document.getElementById("five").click();
    document.getElementById("three").click();
    document.getElementById("plus").click();
    document.getElementById("three").click();
    document.getElementById("five").click();
    document.getElementById("equal").click();
    const expect = "88";
    const result = document.getElementById("theScreen").textContent;
    t.equal(result, expect);
    document.getElementById("theScreen").textContent = "0";
})

test("test 53-35=", t => {
    document.getElementById("five").click();
    document.getElementById("three").click();
    document.getElementById("minus").click();
    document.getElementById("three").click();
    document.getElementById("five").click();
    document.getElementById("equal").click();
    const expect = "18";
    const result = document.getElementById("theScreen").textContent;
    t.equal(result, expect);
    document.getElementById("theScreen").textContent = "0";
})

test("test 5X5=", t => {
    document.getElementById("five").click();
    document.getElementById("mult").click();
    document.getElementById("five").click();
    document.getElementById("equal").click();
    const expect = "25";
    const result = document.getElementById("theScreen").textContent;
    t.equal(result, expect);
    document.getElementById("theScreen").textContent = "0";
})

test("test 15/5=", t => {
    document.getElementById("one").click();
    document.getElementById("five").click();
    document.getElementById("div").click();
    document.getElementById("five").click();
    document.getElementById("equal").click();
    const expect = "3";
    const result = document.getElementById("theScreen").textContent;
    t.equal(result, expect);
    document.getElementById("theScreen").textContent = "0";

})


test("test 53+35+35=123", t => {
    document.getElementById("five").click();
    document.getElementById("three").click();
    document.getElementById("plus").click();
    document.getElementById("three").click();
    document.getElementById("five").click();
    document.getElementById("plus").click();
    document.getElementById("three").click();
    document.getElementById("five").click();
    document.getElementById("equal").click();
    const expect = "123";
    const result = document.getElementById("theScreen").textContent;
    t.equal(result, expect);
    document.getElementById("theScreen").textContent = "0";
})


test("test 53-35-5=", t => {
    document.getElementById("five").click();
    document.getElementById("three").click();
    document.getElementById("minus").click();
    document.getElementById("three").click();
    document.getElementById("five").click();
    document.getElementById("minus").click();
    document.getElementById("five").click();
    document.getElementById("equal").click();
    const expect = "13";
    const result = document.getElementById("theScreen").textContent;
    t.equal(result, expect);
    document.getElementById("theScreen").textContent = "0";
})

test("test 5X5X5=", t => {
    document.getElementById("five").click();
    document.getElementById("mult").click();
    document.getElementById("five").click();
    document.getElementById("mult").click();
    document.getElementById("five").click();
    document.getElementById("equal").click();
    const expect = "125";
    const result = document.getElementById("theScreen").textContent;
    t.equal(result, expect);
    document.getElementById("theScreen").textContent = "0";
})


test("test 45/3/5=", t => {
    document.getElementById("four").click();
    document.getElementById("five").click();
    document.getElementById("div").click();
    document.getElementById("three").click();
    document.getElementById("div").click();
    document.getElementById("five").click();
    document.getElementById("equal").click();
    const expect = "3";
    const result = document.getElementById("theScreen").textContent;
    t.equal(result, expect);
    document.getElementById("theScreen").textContent = "0";
})

test("test 5+4-5=", t => {
    document.getElementById("five").click();
    document.getElementById("plus").click();
    document.getElementById("four").click();
    document.getElementById("minus").click();
    document.getElementById("five").click();
    document.getElementById("equal").click();
    const expect = "4";
    const result = document.getElementById("theScreen").textContent;
    t.equal(result, expect);
    document.getElementById("theScreen").textContent = "0";
})

test("test 5-4X5=", t => {
    document.getElementById("five").click();
    document.getElementById("minus").click();
    document.getElementById("four").click();
    document.getElementById("mult").click();
    document.getElementById("five").click();
    document.getElementById("equal").click();
    const expect = "5";
    const result = document.getElementById("theScreen").textContent;
    t.equal(result, expect);
    document.getElementById("theScreen").textContent = "0";
})

test("test +5=", t => {
    document.getElementById("plus").click();;
    document.getElementById("five").click();
    document.getElementById("equal").click();
    const expect = "5";
    const result = document.getElementById("theScreen").textContent;
    t.equal(result, expect);
    document.getElementById("theScreen").textContent = "0";
})
test("test -5=", t => {
    document.getElementById("minus").click();;
    document.getElementById("five").click();
    document.getElementById("equal").click();
    const expect = "-5";
    const result = document.getElementById("theScreen").textContent;
    t.equal(result, expect);
    document.getElementById("theScreen").textContent = "0";
})

test("test X5=", t => {
    document.getElementById("mult").click();;
    document.getElementById("five").click();
    document.getElementById("equal").click();
    const expect = "0";
    const result = document.getElementById("theScreen").textContent;
    t.equal(result, expect);
    document.getElementById("theScreen").textContent = "0";
})

test("test /5=", t => {
    document.getElementById("div").click();;
    document.getElementById("five").click();
    document.getElementById("equal").click();
    const expect = "0";
    const result = document.getElementById("theScreen").textContent;
    t.equal(result, expect);
    document.getElementById("theScreen").textContent = "0";
})

test("test =", t => {
    document.getElementById("equal").click();
    const expect = "0";
    const result = document.getElementById("theScreen").textContent;
    t.equal(result, expect);
    document.getElementById("theScreen").textContent = "0";
})

test("test 5.5/2=", t => {
    document.getElementById("five").click();
    document.getElementById("dot").click();
    document.getElementById("five").click();
    document.getElementById("div").click();
    document.getElementById("tow").click();
    document.getElementById("equal").click();
    const expect = "2.75";
    const result = document.getElementById("theScreen").textContent;
    t.equal(result, expect);
    document.getElementById("theScreen").textContent = "0";
})

test("test 5..", t => {
    document.getElementById("five").click();
    document.getElementById("dot").click();
    document.getElementById("dot").click();
    const expect = "5.";
    const result = document.getElementById("theScreen").textContent;
    t.equal(result, expect);
    document.getElementById("theScreen").textContent = "0";
})

test("test 5+=", t => {
    document.getElementById("five").click();
    document.getElementById("plus").click();
    document.getElementById("equal").click();
    const expect = "5";
    const result = document.getElementById("theScreen").textContent;
    t.equal(result, expect);
    document.getElementById("theScreen").textContent = "0";
})