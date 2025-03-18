function generateVCard() {
    let org = document.getElementById("org").value;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let website = document.getElementById("website").value;
    let note = document.getElementById("note").value;

    let vCardData = `BEGIN:VCARD
VERSION:3.0
N:${name}
ORG:${org}
TEL:${phone}
EMAIL:${email}
ADR:${address}
URL:${website}
NOTE:${note}
END:VCARD`;

    let blob = new Blob([vCardData], { type: "text/vcard" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "contact.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
