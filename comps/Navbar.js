import Image from 'next/image';
const Navbar = () => {
    return (
        <nav>
            <div className = "logo">
                <Image src = "/Complaint_Box_logo.png" width = {128} height = {75} className = "complaint-logo"/>
            </div>
        </nav>
      );
}
 
export default Navbar;