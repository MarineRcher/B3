using UnityEngine;

public class DetectZOne : MonoBehaviour
{
    void rEnter(Collider other)
    {
        Destroy(other.gameObject);

    }
}
    