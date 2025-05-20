export default function Artikel(){
    return (
        <div>
            <Judul/>
            <Text/>
            <Gambar/>
            <Text2/>
            <Penulis/>
        </div>
    )
}
function Judul(){
    return (
        <h1>POLITEKNIK CALTEX RIAU</h1> 
        
    )
}
function Gambar(){
    return (
        <div>
            <center><img src="img/Picture2.jpg" alt="logo"/></center>
        </div>
    )
}

function Text() {  
    const text = "Politeknik Caltex Riau";
    return (
        <div>
            <hr/>
            <p>{text.toUpperCase()}</p>
        </div> 
    )
}
function Text2() {
    return (
        <div>
            <p>Politeknik Caltex Riau (PCR) adalah sebuah institusi pendidikan tinggi yang berfokus pada program pendidikan vokasi di bidang teknologi dan industri. Terletak di Pekanbaru, Riau, PCR menawarkan berbagai program studi yang dirancang untuk menghasilkan lulusan yang siap kerja dan memiliki kompetensi tinggi di bidangnya.Sebagai lembaga pendidikan yang terakreditasi, Politeknik Caltex Riau bekerja sama dengan berbagai industri terkemuka, baik di tingkat nasional maupun internasional, untuk memberikan pengalaman belajar yang relevan dengan kebutuhan dunia kerja
            </p>
        </div>
    )
}
function Penulis(){
    return (
        <div>
            <small>@Zayyandra Rajel Ahsan</small>
        </div>
    )
}
