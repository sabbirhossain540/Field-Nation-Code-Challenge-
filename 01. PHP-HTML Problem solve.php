<?php   

class InheritArrayObject extends ArrayObject {

    public function __set($name, $val) {
        $this[$name] = $val;
    }
	
    public function displayAsTable() {
		$data_set = (array) $this;
		
        $table =  '<table>';  
        foreach ($data_set as $key => $val) {
            $table .= '<tr>';
            $table .= '<td>' . $key . '</td>';
            $table .= '<th>' . $val . '</th>';
            $table .= '</tr>';
        }    
        $table .=  '</table>';    
        return $table;
    } 
}


$obj = new InheritArrayObject();    
$obj->Name = 'Sabbir Hossain'; 
$obj->Profession = 'Software Engineer'; 
$obj->Gender = 'Male'; 
$obj->Religion = 'Islam'; 
$obj->Organization = 'Field Nation';
$obj->Nationality = 'Bangladeshi';

echo $obj->displayAsTable();    

?>
